import type {
  NextComponentType,
  NextLayoutComponentType,
  NextPageContext,
} from 'next';
import type { AppProps } from 'next/app';

declare module 'next' {
  // eslint-disable-next-line @typescript-eslint/ban-types
  type NextLayoutComponentType<P = {}> = NextComponentType<
    NextPageContext,
    never,
    P
  > & {
    getLayout?: (page: ReactNode) => ReactNode;
  };
}

declare module 'next/app' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-types
  type AppLayoutProps<P = {}> = AppProps & {
    Component: NextLayoutComponentType;
  };
}
