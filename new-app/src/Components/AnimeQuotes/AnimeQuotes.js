import {
  CircularProgress,
  Dialog,
  DialogTitle,
  TextField,
  Button,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { memo, useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import Header from "../Header/Header";
import InputForm from "../InputForm/InputForm";
import QuotesList from "../QuotesList/QuotesList";

function AnimeQuotes() {
  document.title = "Аниме цитаты";
  const [modalFlag, setModalFlag] = useState(false);
  const quotes = useSelector((state) => state.quotes.quotesList, shallowEqual);
  const loading = useSelector((state) => state.quotes.loading, shallowEqual);
  let error = useSelector((state) => state.quotes.error);

  useEffect(() => {
    if (error) {
      setModalFlag(true);
    }
  }, [error]);


  const StyledCircularProgress = withStyles({
    root: {
      position: "fixed",
      // zIndex: "7 !important",
      top: "calc(50% - 20px)",
      left: "calc(50% - 20px)",
    },
  })(CircularProgress);

  return (
    <>
      {loading && <StyledCircularProgress />}
      <Header />
      <QuotesList quotes={quotes} />
      <InputForm />
      <Dialog open={modalFlag}>
        <DialogTitle>Ошибка</DialogTitle>
        <TextField value={error} sx={{ width: 250 }} />
        <Button onClick={() => setModalFlag(false)}>Ок</Button>
      </Dialog>
    </>
  );
}

export default memo(AnimeQuotes);
