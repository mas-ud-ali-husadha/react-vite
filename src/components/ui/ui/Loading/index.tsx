import { Spinner } from "..";

const DefaultLoading = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <Spinner />
    </div>
  );
};

interface LoadingProps {
  [index: string]: string | number;
}
const Loading = (props: LoadingProps) => {
  switch (props.type) {
    default:
      return <DefaultLoading {...props} />;
  }
};

export default Loading;
