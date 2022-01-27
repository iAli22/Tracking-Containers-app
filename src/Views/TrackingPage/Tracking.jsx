import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
  Loader,
  MainNavbar,
  Search,
  ShowError,
  TrackingTimeLine,
} from "../../Components";
import { TrackingDetails } from "../../Containers";
import { useFetch } from "../../utils";

function Tracking() {
  const [search, setSearch] = useState(null);
  const { data, errors, done } = useFetch(
    search ? `https://tracking.bosta.co/shipments/track/${search}` : null
  );
  const getTerm = (term) => {
    setSearch(term);
  };

  return (
    <>
      <MainNavbar getTerm={getTerm} done={done} />

      {data && !errors && !done ? (
        <Container className="mt-5">
          <TrackingTimeLine data={data} />
          <TrackingDetails data={data} />
        </Container>
      ) : (
        <Container className="mt-5 h-100">
          {!done && (
            <div className="d-flex justify-content-center align-items-center">
              <Search getTerm={getTerm} />
            </div>
          )}

          {done && <Loader />}
          {errors && <ShowError />}
        </Container>
      )}
    </>
  );
}

export default Tracking;
