const Aside = () => {
  return (
    <aside className="flex flex-col items-start p-4 border border-green-500 min-w-[300px] m-4">
      <h4 className="text-xl font-bold mb-4">Golden Retriever</h4>
      <img
        src="src/components/dog.png"
        alt="리트리버"
        className="w-48 h-48 object-cover mb-4"
      />
      <ul className="list-none space-y-2">
        <li>● 기본특성</li>
        <li>● 단점</li>
        <li>● 키울 시 주의점</li>
        <li>● 파생 혼종견</li>
      </ul>
    </aside>
  );
};

export default Aside;
