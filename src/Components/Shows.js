import useFetch from "../Hooks/useFetch";
import Show from "./Show";

const Shows = () => {
  const { shows } = useFetch();

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 lg:p-10 py-10 lg:px-10 px-8">
      {shows?.map((showList) => {
        return (
          <Show
            showList={showList}
            key={showList.show.id}
            className="text-2xl"
          ></Show>
        );
      })}
    </div>
  );
};

export default Shows;
