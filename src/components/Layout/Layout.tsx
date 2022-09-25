/** Components */
import Header from './Header/Header';

/** Stylesheets */
import '../Layout/Layout.scss';

const Layout: React.FC<any> = (props: any) => {
  const { children } = props;
  return (
    <div className="layout">
      <Header />
      <div className='layout__content'>
        {children}
      </div>
    </div>)
}

export default Layout;