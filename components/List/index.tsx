import { Item } from "../Item";

export const List = ({ data }: any) => {
  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((item: any) => {
          return (
            <div key={item.id}>
              <Item item={item} />
            </div>
          );
        })}
    </>
  );
};
