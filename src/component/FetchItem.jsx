import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { itemsAction } from "../store/items";
import { fetchingActions } from "../store/fechining";

export default function FetchItem() {
  const fetchStatus = useSelector((store) => store.fetching.fetchDone);

  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchingActions.markCurrentlyFechingStart());

    fetch("http://localhost:8080/items", signal)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingActions.markFetchDone());
        dispatch(fetchingActions.markCurrentlyFechingFinish());
        dispatch(itemsAction.addInitialItems(data.items));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
}
