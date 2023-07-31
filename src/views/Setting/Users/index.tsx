import {
  Card,
  ActionButton,
  DeleteModal,
  Table,
  PageTitle,
  Button,
} from "@/components/ui";
import { useState, useEffect, useRef, useCallback } from "react";
import { BsPlusLg } from "react-icons/bs";
import Dialog from "./Dialog";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { deleteUser, getListUsers } from "@/store/setting/users/action";
import { ListData } from "@/types/UserTypes";
import useFetchData from "@/hooks/useFetchData";
import { defaultValues } from "./variable";

const Users = () => {
  const [dialog, setDialog] = useState({
    modal: false,
    delete: false,
  });

  const EditData = useRef<ListData>(defaultValues);
  const deleteId = useRef<number | null>(null);
  const { list, loading } = useAppSelector((state) => state.users);

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
    EditData.current = defaultValues;
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

  const handleClickEdit = ({ id, name, email }: ListData) => {
    const data = { id, name, email };
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

  const onSubmit = async () => {
    await deleteRequest.fetch(Number(deleteId.current));
  };

  const dispatch = useAppDispatch();

  const fetch = useCallback(async () => {
    try {
      const response = await dispatch(getListUsers());
      return response;
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    void fetch();
  }, [fetch]);

  return (
    <>
      <PageTitle title="User">
        <div className="md:flex hidden md:flex-row gap-2 items-center">
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

export default Users;
