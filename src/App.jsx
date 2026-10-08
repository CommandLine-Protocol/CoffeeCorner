import React, { useState, useEffect } from 'react';
import { supabase } from './lib/supabaseClient';

export default function App() {
  /**
   * SESSION 1 TAKE-HOME TASK FOR CHAPTER MEMBERS:
   * 1. Remove the static mockItems below.
   * 2. Use useEffect and the supabase client to query your "items" table.
   * 3. Set up loading and error states.
   * 4. Render the dynamic list in the grid below.
   * 5. Ensure that if is_available === false, an "Out of Stock" badge is visible!
   */

  // Placeholder mock data provided as design reference
  const [items, setItems] = useState([
    {
      id: '1',
      name: 'African Spiced Milk Tea',
      category: 'Tea',
      price_ugx: 3000,
      is_available: true
    },
    {
      id: '2',
      name: 'Espresso Single Shot',
      category: 'Coffee',
      price_ugx: 4000,
      is_available: true
    },
    {
      id: '3',
      name: 'Iced Caramel Latte',
      category: 'Coffee',
      price_ugx: 6500,
      is_available: false
    },
    {
      id: '4',
      name: 'Fresh Beef Samosa (Pair)',
      category: 'Snacks',
      price_ugx: 2500,
      is_available: false
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // TODO: Replace with dynamic Supabase query
  // useEffect(() => {
  //   async function fetchItems() {
  //     // Your Supabase query goes here
  //   }
  //   fetchItems();
  // }, []);

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col">
      <header className="bg-amber-900 text-amber-50 px-6 py-4 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-black tracking-tight flex items-center gap-2">
              ☕ CoffeeCorner
            </h1>
            <p className="text-xs text-amber-200">Campus Artisan Coffee & Snacks</p>
          </div>
          <span className="text-[11px] font-semibold bg-amber-800 border border-amber-700 px-3 py-1 rounded-full">
            Take-Home Sprint 1
          </span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 flex-1 w-full">
        <div className="mb-6 bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
          <h2 className="text-lg font-bold text-stone-800">Available Drinks & Bites</h2>
          <p className="text-xs text-stone-500 mt-1">
            Order fresh drinks directly at the campus counter.
          </p>
        </div>

        {loading && (
          <div className="text-center py-12 text-stone-500 font-medium text-sm">
            Loading menu items...
          </div>
        )}

        {error && (
          <div className="p-4 mb-6 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs font-mono">
            Error: {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className={`p-5 rounded-xl border transition-all ${
                item.is_available
                  ? 'bg-white border-stone-200 shadow-sm'
                  : 'bg-stone-50 border-stone-200 opacity-70'
              }`}
            >
              <div className="flex justify-between items-start gap-2">
                <div>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-stone-900 text-base">{item.name}</h3>
                </div>
                <span className="font-black text-amber-900 text-sm whitespace-nowrap">
                  UGX {item.price_ugx.toLocaleString()}
                </span>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex justify-between items-center">
                {item.is_available ? (
                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                    ● In Stock
                  </span>
                ) : (
                  <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                    Out of Stock
                  </span>
                )}
                <button
                  disabled={!item.is_available}
                  className={`text-xs px-3 py-1.5 rounded-lg font-bold ${
                    item.is_available
                      ? 'bg-amber-900 text-amber-50 hover:bg-amber-800'
                      : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                  }`}
                >
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}