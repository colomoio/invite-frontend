import {
  Fragment,
  FunctionComponent,
  type ReactElement,
  type ReactNode,
} from "react";
import {
  render as rtlRender,
  renderHook as rtlRenderHook,
  type RenderOptions,
  type RenderHookOptions,
} from "@testing-library/react";

import {
  AuthContext,
  type AuthContextType,
} from "../../../users/ui/AuthProvider";

/**
 *
 */
function renderWithAuth(children: ReactNode, initialState: AuthContextType) {
  return (
    <AuthContext.Provider value={initialState}>{children}</AuthContext.Provider>
  );
}

function Render() {
  let rendered: ReactNode = null;

  return function Render(Component: ReactNode) {
    rendered = Component;
    return {
      withAuth(initialState: AuthContextType) {
        rendered = renderWithAuth(rendered, initialState);

        return this;
      },
      now(opts?: RenderOptions) {
        return rtlRender(rendered as ReactElement, opts);
      },
    };
  };
}

type ElementProps = {
  children?: ReactNode;
};

function getWrapper(
  Wrapper: FunctionComponent<ElementProps>,
  render: (children: ReactNode) => JSX.Element
) {
  return function WrapComponent({ children }: ElementProps) {
    return <Wrapper>{render(children)}</Wrapper>;
  };
}

/**
 * @example
 * render(<Component />).withAuth({ user: null }).now()
 */
export const render = Render();

export function renderHook<Props extends any, Result extends unknown>(
  hookFn: (props: Props) => Result
) {
  let Wrapper = ({ children }: ElementProps) => <Fragment>{children}</Fragment>;

  return {
    withAuth(initialState: AuthContextType) {
      Wrapper = getWrapper(Wrapper, (children) =>
        renderWithAuth(children, initialState)
      );

      return this;
    },
    now(opts?: RenderHookOptions<Props>) {
      return rtlRenderHook(hookFn, {
        wrapper: ({ children }) => <Wrapper>{children}</Wrapper>,
        ...opts,
      });
    },
  };
}
