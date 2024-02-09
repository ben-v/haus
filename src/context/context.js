import { createContext, useCallback, useReducer } from "react";

const type = {
  NAV: "NAV",
  COLOR: "COLOR",
  SHOWPROJECT: "SHOWPROJECT",
  ACTIVEPROJECT: "ACTIVEPROJECT",
};

const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case type.NAV:
      return {
        ...state,
        nav: action.payload,
      };
    case type.COLOR:
      return {
        ...state,
        color: action.payload,
      };
    case type.SHOWPROJECT:
      return {
        ...state,
        showProject: !state.showProject,
      };
    case type.ACTIVEPROJECT:
      return {
        ...state,
        activeProject: action.payload,
      };
    default:
      return state;
  }
};

const State = (props) => {
  const initialState = {
    nav: null,
    color: "orange",
    showProject: false,
    activeProject: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSection = useCallback((value) => {
    dispatch({
      type: type.NAV,
      payload: value,
    });
  }, []);

  const closeSection = useCallback(() => {
    dispatch({
      type: type.NAV,
      payload: null,
    });
  }, []);

  const getColor = useCallback((value) => {
    let color = localStorage.getItem("color");
    document.documentElement.style.setProperty(
      "--main-color",
      color ? color : value
    );
    dispatch({
      type: type.COLOR,
      payload: color ? color : value,
    });
  }, []);

  const colorChange = useCallback((value) => {
    document.documentElement.style.setProperty("--main-color", value);
    localStorage.setItem("color", value);
    dispatch({
      type: type.COLOR,
      payload: value,
    });
  }, []);

  // Project view
  const showProjectFunction = useCallback(() => {
    dispatch({
      type: type.SHOWPROJECT,
    });
  }, []);

  const activeProjectFunction = useCallback((value) => {
    dispatch({
      type: type.ACTIVEPROJECT,
      payload: value,
    });
  }, []);

  const { color, nav, activeProject, showProject } = state;

  return (
    <Context.Provider
      value={{
        openSection: openSection,
        closeSection: closeSection,
        nav,
        colorChange: colorChange,
        getColor: getColor,
        color,
        // project
        showProjectFunction: showProjectFunction,
        activeProjectFunction: activeProjectFunction,
        activeProject,
        showProject,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;

export { Context };
