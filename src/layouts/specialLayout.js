import PropTypes from 'prop-types';
// next
import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { Background } from 'src/sections/home';
//
const Header = dynamic(() => import('./header/Header'), { ssr: false });
const HeaderSimple = dynamic(() => import('./header/HeaderSimple'), { ssr: false });
const Footer = dynamic(() => import('./footer/Footer'), { ssr: false });
const FooterSimple = dynamic(() => import('./footer/FooterSimple'), { ssr: false });

// ----------------------------------------------------------------------

Layout.propTypes = {
  children: PropTypes.node,
  disabledFooter: PropTypes.bool,
  disabledHeader: PropTypes.bool,
  simpleFooter: PropTypes.bool,
  simpleHeader: PropTypes.bool,
  transparentHeader: PropTypes.bool,
  background: PropTypes.string,
};

export default function Layout({
  children,
  transparentHeader,
  disabledHeader,
  disabledFooter,
  simpleHeader,
  simpleFooter,
  background,
}) {
  const controlRef = useRef();
  const onClick = (title) => {
    controlRef.current && controlRef.current.setF(title)
  }
  return (
    <>
      {disabledHeader ? null : (
        <>
          {simpleHeader ? (
            <HeaderSimple transparent={transparentHeader} />
          ) : (
            <Header transparent={transparentHeader} onEnter={onClick} />
          )}
        </>
      )}
      <Background cref={controlRef} />
      {children}

      {/* <FooterSimple /> */}
      {disabledFooter ? null : <>{simpleFooter ? <FooterSimple /> : <Footer fill />}</>}
    </>
  );
}
