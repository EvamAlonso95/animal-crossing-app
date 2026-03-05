import { useParams } from "react-router";
import { useFossilInfo } from "../hooks/useFossilInfo";

export const ItemDetail = () => {
  const { fossilname } = useParams<{ fossilname: string }>();

  const { data: fossilData } = useFossilInfo(fossilname ?? "");

  console.log({ fossilData });
  return <h1> Detalle del fosil</h1>;
};
