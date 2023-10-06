import { useState, useEffect } from "react";

let cachedScripts = [];

export async function useScript(id, src, onLoad, onError) {
  const [state, setState] = useState({
    loaded: false,
    error: false,
  });

  useEffect(() => {
    if (cachedScripts.includes(src)) {
      cachedScripts = [];

      setState({
        loaded: true,
        error: false,
      });

      return;
    }

    cachedScripts.push(src);

    let script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = true;
    script.defer = true;

    const onScriptLoad = () => {
      setState({
        loaded: true,
        error: false,
      });

      if (onLoad) {
        onLoad();
      }
    };

    const onScriptError = () => {
      const index = cachedScripts.indexOf(src);
      if (index >= 0) cachedScripts.splice(index, 1);
      script.remove();

      setState({
        loaded: true,
        error: true,
      });

      if (onError) {
        onError();
      }
    };

    script.addEventListener("load", onScriptLoad);
    script.addEventListener("error", onScriptError);

    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", onScriptLoad);
      script.removeEventListener("error", onScriptError);
    };
  }, [src]);

  return [state.loaded, state.error];
}