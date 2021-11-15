import "./quotesList.css";

function QuotesList({ quotes }) {
  return (
    <div className="quotes">
      <p className="quotes__p">
        Отправьте пустое сообщение что бы получить цитату из случайного аниме.
        Или введите название аниме на латинице для цитаты из конкретного аниме.
      </p>
      <ul className="quotes__ul">
        {quotes
          ? quotes.map((el, index) => (
              <li key={index} className="quotes__item">
                <p className="quotes__anime">
                  <b>Anime</b>: {el.anime}
                </p>
                <p className="quotes__character">
                  <b>Character</b>: {el.character}
                </p>
                <p className="quotes__quote">
                  <b>Quote</b>: {el.quote}
                </p>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default QuotesList;