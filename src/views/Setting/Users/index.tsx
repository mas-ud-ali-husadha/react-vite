import {
  Card,
  ActionButton,
  Table,
  MultiSelect,
  PageTitle,
  Pagination,
  Button,
} from "@/components/ui";
import { useState, useEffect, useRef, useCallback } from "react";
import { BsPlusLg } from "react-icons/bs";
import Dialog from "./Dialog";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { deleteUser, getListUsers } from "@/store/setting/users/action";
import { ListData } from "@/types/UserTypes";
import DeleteModal from "@/components/ui/DeleteModal";
import useFetchData from "@/hooks/useFetchData";

interface filter {
  id: number;
  name: string;
}

const people: filter[] = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

const Example = () => {
  const [selected, setSelected] = useState<number[]>([]);

  return (
    <MultiSelect<filter, number>
      data={people}
      value={(item) => people.find((i) => i.id == item)?.name}
      label={(item) => item.name}
      id="id"
      select={selected}
      setSelect={(e) => setSelected(e)}
    />
  );
};

const SettingMenu = () => {
  const [dialog, setDialog] = useState({
    modal: false,
    delete: false,
  });

  const initialForm = {
    id: null,
    name: "",
    email: "",
    phone_number: "",
    user_roles_id: null,
  };

  const EditData = useRef<ListData>(initialForm);
  const deleteId = useRef<number | null>(null);
  const { list, totalItems, loading } = useAppSelector((state) => state.users);

  const headers = [
    {
      name: "Nama",
      key: "name",
    },
    {
      name: "Email",
      key: "email",
      className: "text-center",
    },
    {
      name: "Telepon",
      key: "phone_number",
      className: "text-center",
    },
  ];

  const handleAdd = () => {
    EditData.current = initialForm;
    setDialog({
      ...dialog,
      modal: true,
    });
  };

  const deleteRequest = useFetchData({
    action: deleteUser,
    onSuccess: async () => {
      await fetch();
      setDialog({
        ...dialog,
        delete: false,
      });
    },
  });

  const handleClickEdit = ({
    id,
    name,
    email,
    phone_number,
    user_roles_id,
  }: ListData) => {
    const data = { id, name, email, phone_number, user_roles_id };
    EditData.current = data;
    setDialog({
      ...dialog,
      modal: true,
    });
  };

  const handleClickDelete = ({ id }: ListData) => {
    deleteId.current = Number(id);
    setDialog({
      ...dialog,
      delete: true,
    });
  };

  const onSubmit = () => {
    deleteRequest.fetch(Number(deleteId.current));
  };

  const dispatch = useAppDispatch();

  const fetch = useCallback(async () => {
    try {
      const response = await dispatch(getListUsers());
      return response;
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, [dispatch]); //

  useEffect(() => {
    void fetch();
  }, [fetch]);

  return (
    <>
      <PageTitle title="User">
        <div className="md:flex hidden md:flex-row gap-2 items-center">
          <span>Customer</span>
          <Example />
          <Button
            icon={BsPlusLg}
            text="Tambah User"
            variant="primary"
            onClick={handleAdd}
          />
        </div>
      </PageTitle>

      <Card border type="primary" padding>
        <Table<ListData>
          headers={headers}
          data={list}
          loading={loading}
          action={(item) => (
            <ActionButton
              editBtn
              deletedBtn
              item={item}
              onClickEdit={handleClickEdit}
              onClickDelete={handleClickDelete}
            />
          )}
        />
        <Pagination total={totalItems} />
      </Card>

      <Dialog
        open={dialog.modal}
        editData={EditData.current}
        refresh={fetch}
        onClose={() =>
          setDialog({
            ...dialog,
            modal: false,
          })
        }
      />

      <DeleteModal
        open={dialog.delete}
        onClose={() =>
          setDialog({
            ...dialog,
            delete: false,
          })
        }
        loading={deleteRequest.loading}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default SettingMenu;
