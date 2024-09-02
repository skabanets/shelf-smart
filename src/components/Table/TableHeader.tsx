export const TableHeader = () => {
  return (
    <thead className="bg-tableHeaderColor text-secondaryTextColor font-montserrat-semibold h-12">
      <tr>
        <th className="number-column">№</th>
        <th>Title</th>
        <th>Author</th>
        <th>ISBN</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
};
