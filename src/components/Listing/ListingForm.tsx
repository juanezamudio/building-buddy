import React, { useState } from 'react';

const categories = [
  'Tools',
  'Kitchenware',
  'Party Supplies',
  'Electronics',
  'Fitness',
  'Other',
];

const ListingForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [availableFrom, setAvailableFrom] = useState('');
  const [availableTo, setAvailableTo] = useState('');
  const [tipAmount, setTipAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up to Supabase
    alert('Listing submitted (stub)!');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow max-w-md mx-auto mt-6">
      <h2 className="text-lg font-bold mb-2">Create Listing</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="border p-2 rounded w-full mb-2" required />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" className="border p-2 rounded w-full mb-2" required />
      <select value={category} onChange={e => setCategory(e.target.value)} className="border p-2 rounded w-full mb-2">
        {categories.map(cat => <option key={cat}>{cat}</option>)}
      </select>
      <div className="flex gap-2 mb-2">
        <input type="date" value={availableFrom} onChange={e => setAvailableFrom(e.target.value)} className="border p-2 rounded w-1/2" required />
        <input type="date" value={availableTo} onChange={e => setAvailableTo(e.target.value)} className="border p-2 rounded w-1/2" required />
      </div>
      <input type="number" value={tipAmount} onChange={e => setTipAmount(e.target.value)} placeholder="Tip Amount (optional)" className="border p-2 rounded w-full mb-2" min="0" />
      <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded">Submit</button>
    </form>
  );
};

export default ListingForm;
