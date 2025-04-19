'use client';

import deleteCustomer from './_actions/deleteCustomer';

export default function DeleteButton({
  id,
  onDelete,
}: {
  id: number;
  onDelete?: () => void; // optional so it's flexible
}) {
  const handleDelete = async () => {
    try {
      console.log('Delete id:', id);
      await deleteCustomer(id);
      alert('Customer deleted!');

      // ✅ Update UI
      if (onDelete) onDelete();
    } catch (error) {
      console.error('Error deleting customer:', error);
      alert('Error deleting customer');
    }
  };

  return (
    <button
      className="px-4 py-1 bg-red-400 text-red-900 rounded  hover:bg-red-500 hover:text-white"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
}
