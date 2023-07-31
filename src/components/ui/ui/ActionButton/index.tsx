import DeleteIcons from "@/assets/icons/DeleteIcons";
import EditIcons from "@/assets/icons/EditIcons";

interface ActionButtonType<T> {
  editBtn?: boolean;
  deletedBtn?: boolean;
  onClickEdit?: (item: T) => void;
  onClickDelete?: (item: T) => void;
  item: T;
}

const ActionButton = <T,>({
  editBtn,
  deletedBtn,
  onClickEdit,
  onClickDelete,
  item,
}: ActionButtonType<T>) => {
  return (
    <div className="flex ">
      {editBtn && onClickEdit && (
        <button
          className="bg-primary p-2 first:rounded-l last:rounded-r"
          onClick={() => onClickEdit(item)}
        >
          <EditIcons />
        </button>
      )}
      {deletedBtn && onClickDelete && (
        <button
          className="bg-danger p-2  first:rounded-l last:rounded-r"
          onClick={() => onClickDelete(item)}
        >
          <DeleteIcons />
        </button>
      )}
    </div>
  );
};

export default ActionButton;
