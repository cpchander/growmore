"use client";

import { useState, useMemo, useCallback } from "react";
import {
  Lightbulb, Shield, Thermometer, PanelTop, Tv, Music, Mic, Wifi,
  Wind, Droplets, Zap, BatteryCharging,
  Plus, Minus, X, ArrowRight, ShoppingCart, Scale, ChevronDown, ChevronUp,
  Check, Star, Filter, type LucideIcon,
} from "lucide-react";
import {
  PRODUCTS, CATEGORY_META, BRAND_META,
  type AutomationProduct, type ProductCategory, type BrandKey,
  formatPriceINR, getComparableProducts,
} from "@/lib/products-data";

// ────────────────────────────────────────────────────────────
// ICON MAP
// ────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, LucideIcon> = {
  Lightbulb, Shield, Thermometer, PanelTop, Tv, Music, Mic, Wifi,
  Wind, Droplets, Zap, BatteryCharging,
};

// ────────────────────────────────────────────────────────────
// TYPES
// ────────────────────────────────────────────────────────────

type CartItem = {
  product: AutomationProduct;
  qty: number;
};

type CompareItem = {
  product: AutomationProduct;
  alternatives: AutomationProduct[];
};

// ────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ────────────────────────────────────────────────────────────

export default function PlannerClient() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("lighting");
  const [brandFilter, setBrandFilter] = useState<BrandKey | "all">("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  const [showCart, setShowCart] = useState(true);
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  // ─── Filtered products ────────────────────────────────────
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(
      (p) =>
        p.category === activeCategory &&
        (brandFilter === "all" || p.brand === brandFilter)
    );
  }, [activeCategory, brandFilter]);

  // ─── Available brands for current category ────────────────
  const availableBrands = useMemo(() => {
    const brands = new Set(
      PRODUCTS.filter((p) => p.category === activeCategory).map((p) => p.brand)
    );
    return Array.from(brands);
  }, [activeCategory]);

  // ─── Cart operations ──────────────────────────────────────
  const addToCart = useCallback((product: AutomationProduct) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.product.id === product.id);
      if (existing) {
        return prev.map((c) =>
          c.product.id === product.id ? { ...c, qty: c.qty + 1 } : c
        );
      }
      return [...prev, { product, qty: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart((prev) => prev.filter((c) => c.product.id !== productId));
  }, []);

  const updateQty = useCallback((productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) =>
          c.product.id === productId
            ? { ...c, qty: Math.max(0, c.qty + delta) }
            : c
        )
        .filter((c) => c.qty > 0)
    );
  }, []);

  const getQtyInCart = useCallback(
    (productId: string) => cart.find((c) => c.product.id === productId)?.qty || 0,
    [cart]
  );

  // ─── Totals ───────────────────────────────────────────────
  const totals = useMemo(() => {
    const hardware = cart.reduce((sum, c) => sum + c.product.priceINR * c.qty, 0);
    const installLow = Math.round(hardware * 0.3);
    const installHigh = Math.round(hardware * 0.5);
    return { hardware, installLow, installHigh, items: cart.reduce((s, c) => s + c.qty, 0) };
  }, [cart]);

  // ─── Compare data ─────────────────────────────────────────
  const compareData = useMemo<CompareItem[]>(() => {
    return cart.map((c) => ({
      product: c.product,
      alternatives: getComparableProducts(c.product).slice(0, 3),
    }));
  }, [cart]);

  // ─── Tier badge ───────────────────────────────────────────
  const tierBadge = (tier: string) => {
    const colors: Record<string, string> = {
      standard: "bg-green-500/15 text-green-400 border-green-500/30",
      premium: "bg-blue-500/15 text-blue-400 border-blue-500/30",
      luxury: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    };
    return (
      <span className={`text-[10px] px-1.5 py-0.5 rounded border font-medium uppercase ${colors[tier] || ""}`}>
        {tier}
      </span>
    );
  };

  return (
    <div className="grid lg:grid-cols-[minmax(0,1fr)_380px] gap-6">
      {/* ════════════ LEFT: PRODUCT LIBRARY ════════════ */}
      <div className="min-w-0">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2">
          {(Object.keys(CATEGORY_META) as ProductCategory[]).map((cat) => {
            const meta = CATEGORY_META[cat];
            const Icon = ICON_MAP[meta.icon] || Lightbulb;
            const count = PRODUCTS.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setBrandFilter("all"); }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gold-500/15 border border-gold-500/50 text-gold-500"
                    : "glass-card text-navy-300 hover:text-white hover:border-gold-500/20"
                }`}
              >
                <Icon className="w-4 h-4" />
                {meta.label}
                <span className="text-[10px] text-navy-500">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Brand filter */}
        <div className="mt-4 flex items-center gap-2 flex-wrap">
          <Filter className="w-3.5 h-3.5 text-navy-400" />
          <button
            onClick={() => setBrandFilter("all")}
            className={`text-xs px-3 py-1.5 rounded-full transition-all ${
              brandFilter === "all"
                ? "bg-gold-500/15 text-gold-500 border border-gold-500/40"
                : "bg-navy-800/50 text-navy-400 hover:text-white"
            }`}
          >
            All Brands
          </button>
          {availableBrands.map((b) => (
            <button
              key={b}
              onClick={() => setBrandFilter(b)}
              className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                brandFilter === b
                  ? "bg-gold-500/15 text-gold-500 border border-gold-500/40"
                  : "bg-navy-800/50 text-navy-400 hover:text-white"
              }`}
            >
              {BRAND_META[b].label}
            </button>
          ))}
        </div>

        {/* Category description */}
        <div className="mt-4 mb-6">
          <h2 className="text-xl font-bold text-white">
            {CATEGORY_META[activeCategory].label}
          </h2>
          <p className="text-sm text-navy-400 mt-1">
            {CATEGORY_META[activeCategory].description}
          </p>
        </div>

        {/* Product cards */}
        <div className="space-y-3">
          {filteredProducts.length === 0 && (
            <div className="glass-card rounded-xl p-8 text-center">
              <p className="text-navy-400">No products match this filter. Try another brand.</p>
            </div>
          )}
          {filteredProducts.map((product) => {
            const inCart = getQtyInCart(product.id);
            const isExpanded = expandedProduct === product.id;
            return (
              <div
                key={product.id}
                className={`glass-card rounded-xl p-4 transition-all ${
                  inCart > 0 ? "border-gold-500/30 bg-gold-500/5" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm font-semibold text-white">
                        {product.name}
                      </h3>
                      {tierBadge(product.tier)}
                      {product.popular && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-gold-500/15 text-gold-500 border border-gold-500/30 flex items-center gap-0.5">
                          <Star className="w-2.5 h-2.5" /> Popular
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-navy-400 mt-0.5">
                      {product.brandLabel} · {product.unit}
                    </p>
                    <p className="text-xs text-navy-300 mt-1">{product.description}</p>

                    {/* Expandable features */}
                    <button
                      onClick={() => setExpandedProduct(isExpanded ? null : product.id)}
                      className="text-[11px] text-gold-500 hover:text-gold-400 mt-1 flex items-center gap-1"
                    >
                      Features
                      {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>
                    {isExpanded && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {product.features.map((f, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-1 rounded bg-navy-800 text-navy-300 flex items-center gap-1"
                          >
                            <Check className="w-2.5 h-2.5 text-green-400" />
                            {f}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Price + add */}
                  <div className="text-right shrink-0">
                    <p className="text-base font-bold text-gold-500">
                      {formatPriceINR(product.priceINR)}
                    </p>
                    <p className="text-[10px] text-navy-500">{product.unit}</p>

                    {inCart > 0 ? (
                      <div className="mt-2 flex items-center gap-1.5 justify-end">
                        <button
                          onClick={() => updateQty(product.id, -1)}
                          className="w-7 h-7 rounded-lg bg-navy-800 hover:bg-navy-700 text-white flex items-center justify-center"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-sm font-semibold text-white w-6 text-center">
                          {inCart}
                        </span>
                        <button
                          onClick={() => updateQty(product.id, 1)}
                          className="w-7 h-7 rounded-lg bg-gold-500/20 hover:bg-gold-500/30 text-gold-500 flex items-center justify-center"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(product)}
                        className="mt-2 text-xs px-3 py-1.5 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-500 hover:bg-gold-500/20 transition-all flex items-center gap-1"
                      >
                        <Plus className="w-3 h-3" /> Add
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ════════════ RIGHT: CART + COST CALCULATOR ════════════ */}
      <div className="lg:sticky lg:top-24 lg:self-start space-y-4">
        {/* Cart summary */}
        <div className="glass-card rounded-xl overflow-hidden">
          <button
            onClick={() => setShowCart(!showCart)}
            className="w-full flex items-center justify-between p-4 text-left"
          >
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-gold-500" />
              <span className="font-semibold text-white">Your Plan</span>
              {totals.items > 0 && (
                <span className="text-xs bg-gold-500/20 text-gold-500 px-2 py-0.5 rounded-full">
                  {totals.items} items
                </span>
              )}
            </div>
            {showCart ? <ChevronUp className="w-4 h-4 text-navy-400" /> : <ChevronDown className="w-4 h-4 text-navy-400" />}
          </button>

          {showCart && (
            <div className="px-4 pb-4">
              {cart.length === 0 ? (
                <p className="text-sm text-navy-400 text-center py-6">
                  Start by adding products from the library on the left.
                </p>
              ) : (
                <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center gap-3 bg-navy-800/40 rounded-lg px-3 py-2"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-white truncate">
                          {item.product.name}
                        </p>
                        <p className="text-[10px] text-navy-400">
                          {item.product.brandLabel} · {formatPriceINR(item.product.priceINR)} × {item.qty}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => updateQty(item.product.id, -1)}
                          className="w-6 h-6 rounded bg-navy-700 hover:bg-navy-600 text-white flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs text-white w-5 text-center font-medium">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.product.id, 1)}
                          className="w-6 h-6 rounded bg-navy-700 hover:bg-navy-600 text-white flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="w-6 h-6 rounded bg-red-500/10 hover:bg-red-500/20 text-red-400 flex items-center justify-center ml-1"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-xs font-semibold text-gold-500 w-20 text-right">
                        {formatPriceINR(item.product.priceINR * item.qty)}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Cost breakdown */}
        {cart.length > 0 && (
          <div className="glass-card rounded-xl p-4 space-y-3">
            <h3 className="font-semibold text-white text-sm">Cost Estimate</h3>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-navy-300">Hardware Total</span>
                <span className="font-semibold text-white">{formatPriceINR(totals.hardware)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-navy-400 text-xs">Installation (est. 30-50%)</span>
                <span className="text-navy-300 text-xs">
                  {formatPriceINR(totals.installLow)} – {formatPriceINR(totals.installHigh)}
                </span>
              </div>
              <div className="border-t border-navy-700 pt-2 flex justify-between">
                <span className="text-white font-semibold">Project Estimate</span>
                <span className="text-gold-500 font-bold text-base">
                  {formatPriceINR(totals.hardware + totals.installLow)} – {formatPriceINR(totals.hardware + totals.installHigh)}
                </span>
              </div>
            </div>

            <p className="text-[10px] text-navy-500 leading-relaxed">
              <strong className="text-navy-400">Disclaimer:</strong> All prices
              are indicative and may vary based on quantity, location,
              availability, taxes (GST), and prevailing market rates. This is
              not a quote. Final pricing will be confirmed after a free site
              survey and detailed consultation.
            </p>

            {/* Category breakdown */}
            <div className="mt-3 space-y-1.5">
              <p className="text-xs text-navy-400 font-medium">By Category</p>
              {(Object.keys(CATEGORY_META) as ProductCategory[]).map((cat) => {
                const catItems = cart.filter((c) => c.product.category === cat);
                if (catItems.length === 0) return null;
                const catTotal = catItems.reduce(
                  (s, c) => s + c.product.priceINR * c.qty,
                  0
                );
                return (
                  <div key={cat} className="flex justify-between text-xs">
                    <span className="text-navy-300">{CATEGORY_META[cat].label}</span>
                    <span className="text-navy-200">{formatPriceINR(catTotal)}</span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="pt-3 space-y-2">
              <button
                onClick={() => setShowCompare(true)}
                className="w-full flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-700 text-white rounded-lg py-2.5 text-sm font-medium transition-all"
              >
                <Scale className="w-4 h-4" />
                Compare with Other Brands
              </button>
              <a
                href="/contact"
                className="w-full flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 rounded-lg py-2.5 text-sm font-semibold transition-all"
              >
                Get Exact Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* ════════════ COMPARE MODAL ════════════ */}
      {showCompare && cart.length > 0 && (
        <div className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm z-50 flex items-start justify-center overflow-y-auto p-4 pt-20">
          <div className="bg-navy-900 border border-navy-700 rounded-2xl max-w-5xl w-full p-6 relative">
            <button
              onClick={() => setShowCompare(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-navy-800 hover:bg-navy-700 flex items-center justify-center text-navy-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <h2 className="text-xl font-bold text-white mb-1">
              Brand Comparison
            </h2>
            <p className="text-sm text-navy-400 mb-6">
              See how your selected products compare with alternatives from other brands.
            </p>

            <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
              {compareData.map(({ product, alternatives }) => (
                <div key={product.id} className="glass-card rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-gold-500 mb-3">
                    {CATEGORY_META[product.category].label}: {product.name}
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-navy-700">
                          <th className="text-left text-navy-400 pb-2 pr-4">Product</th>
                          <th className="text-left text-navy-400 pb-2 pr-4">Brand</th>
                          <th className="text-left text-navy-400 pb-2 pr-4">Tier</th>
                          <th className="text-right text-navy-400 pb-2 pr-4">Price</th>
                          <th className="text-left text-navy-400 pb-2">Features</th>
                          <th className="text-center text-navy-400 pb-2 w-16">Swap</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Current selection */}
                        <tr className="bg-gold-500/5 border-b border-navy-800">
                          <td className="py-2 pr-4 font-medium text-white">
                            {product.name}
                            <span className="text-[10px] text-gold-500 ml-1">(selected)</span>
                          </td>
                          <td className="py-2 pr-4 text-navy-300">{product.brandLabel}</td>
                          <td className="py-2 pr-4">{tierBadge(product.tier)}</td>
                          <td className="py-2 pr-4 text-right font-semibold text-gold-500">
                            {formatPriceINR(product.priceINR)}
                          </td>
                          <td className="py-2">
                            <div className="flex flex-wrap gap-1">
                              {product.features.slice(0, 3).map((f, i) => (
                                <span key={i} className="text-[10px] bg-navy-800 px-1.5 py-0.5 rounded text-navy-300">
                                  {f}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="py-2 text-center">—</td>
                        </tr>

                        {/* Alternatives */}
                        {alternatives.map((alt) => {
                          const priceDiff = alt.priceINR - product.priceINR;
                          const pctDiff = Math.round((priceDiff / product.priceINR) * 100);
                          return (
                            <tr key={alt.id} className="border-b border-navy-800/50">
                              <td className="py-2 pr-4 text-navy-200">{alt.name}</td>
                              <td className="py-2 pr-4 text-navy-300">{alt.brandLabel}</td>
                              <td className="py-2 pr-4">{tierBadge(alt.tier)}</td>
                              <td className="py-2 pr-4 text-right">
                                <span className="font-semibold text-white">{formatPriceINR(alt.priceINR)}</span>
                                <span className={`block text-[10px] ${priceDiff > 0 ? "text-red-400" : "text-green-400"}`}>
                                  {priceDiff > 0 ? "+" : ""}{pctDiff}%
                                </span>
                              </td>
                              <td className="py-2">
                                <div className="flex flex-wrap gap-1">
                                  {alt.features.slice(0, 3).map((f, i) => (
                                    <span key={i} className="text-[10px] bg-navy-800 px-1.5 py-0.5 rounded text-navy-300">
                                      {f}
                                    </span>
                                  ))}
                                </div>
                              </td>
                              <td className="py-2 text-center">
                                <button
                                  onClick={() => {
                                    // Swap: remove current, add alt with same qty
                                    const qty = cart.find(c => c.product.id === product.id)?.qty || 1;
                                    setCart(prev => {
                                      const without = prev.filter(c => c.product.id !== product.id);
                                      const existingAlt = without.find(c => c.product.id === alt.id);
                                      if (existingAlt) {
                                        return without.map(c =>
                                          c.product.id === alt.id ? { ...c, qty: c.qty + qty } : c
                                        );
                                      }
                                      return [...without, { product: alt, qty }];
                                    });
                                  }}
                                  className="text-[10px] px-2 py-1 rounded bg-gold-500/10 text-gold-500 hover:bg-gold-500/20 transition-all"
                                >
                                  Swap
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                        {alternatives.length === 0 && (
                          <tr>
                            <td colSpan={6} className="py-3 text-navy-500 text-center">
                              No direct alternatives in other brands for this product.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowCompare(false)}
                className="px-6 py-2.5 bg-gold-500 hover:bg-gold-600 text-navy-900 rounded-lg text-sm font-semibold transition-all"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
