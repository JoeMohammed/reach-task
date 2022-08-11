import { TChildren } from 'types/global';
import Header from './header';

export default function Layout({ children }: TChildren) {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main */}
      <main>{children}</main>
      {/* Footer */}
    </>
  );
}
