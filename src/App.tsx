import { useEffect, useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/item";
import { items } from "./data/items";
import { getCurrentMonth, FilterListByMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";
import { categories } from "./data/categories";
import { InsertArea } from "./components/InsertArea";

const App = () => {
  const [list, setList] = useState(items);
  const [filterList, setFilterList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilterList(FilterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filterList) {
      if (categories[filterList[i].category].expense) {
        expenseCount += filterList[i].value;
      } else {
        incomeCount += filterList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filterList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>

      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        ></InfoArea>

        <InsertArea onAdd={handleAddItem} />

        <TableArea list={filterList} />
      </C.Body>
    </C.Container>
  );
};

export default App;
