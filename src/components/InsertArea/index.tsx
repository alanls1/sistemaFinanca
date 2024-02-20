import { Item } from "../../types/item";
import { categories } from "../../data/categories";
import { newDateAdjusted } from "../../helpers/dateFilter";

import * as C from "./styles";
import { useState } from "react";

type Props = {
  onAdd: (item: Item) => void;
};

export const InsertArea = ({ onAdd }: Props) => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const handleClick = () => {
    let errors: string[] = [];

    if (isNaN(new Date(date).getTime())) {
      errors.push("Data Inválida!");
    }

    if (!categoryKeys.includes(category)) {
      errors.push("Categoria inválida!");
    }
    if (title === "") {
      errors.push("Título vazio!");
    }
    if (value <= 0) {
      errors.push("Valor inválido!");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: newDateAdjusted(date),
        category,
        title,
        value,
      });
      clearFields();
    }
  };

  const clearFields = () => {
    setDate("");
    setCategory("");
    setTitle("");
    setValue(0);
  };

  return (
    <C.Container>
      <C.ContainerItems>
        <C.Label>Data</C.Label>
        <C.StyledInput
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </C.ContainerItems>

      <C.ContainerItems>
        <C.Label>Categoria</C.Label>
        <C.StyledSelect
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <>
            <option></option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>
                {categories[key].title}
              </option>
            ))}
          </>
        </C.StyledSelect>
      </C.ContainerItems>

      <C.ContainerItems>
        <C.Label>Titulo</C.Label>
        <C.StyledInput
          type="text"
          name=""
          id=""
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </C.ContainerItems>

      <C.ContainerItems>
        <C.Label>Valor</C.Label>
        <C.StyledInput
          type="number"
          name=""
          id=""
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          required
        />
      </C.ContainerItems>

      <C.Button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        Adicionar
      </C.Button>
    </C.Container>
  );
};
