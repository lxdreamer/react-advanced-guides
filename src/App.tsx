import { Layout, Menu } from 'antd'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css'
import { ContextDemo } from './components/context-demo/context-demo'
import { HocDemo } from './components/hoc-demo/hoc-demo'
import { JsxDemo} from './components/jsx-demo/jsx-demo'
import { PropTypesDemo } from './components/proptypes-demo/prop-types-demo'
import { RefsDemo} from './components/refs-demo/refs-demo'
import { OptimizeDemo } from './components/optimize-demo/optimize-demo';

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <div>
        <Layout>
          <Header>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1"><Link to="/">context</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/refs">refs转发</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/hoc">高阶组件</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/jsx">深入jsx</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/optimize">性能优化</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/prop">PropTypes</Link></Menu.Item>
            </Menu>
          </Header>
          <Content>
            <Switch>
              <Route path="/" exact component={ContextDemo} />
              <Route path="/refs" exact component={RefsDemo} />
              <Route path="/hoc" exact component={HocDemo} />
              <Route path="/jsx" exact component={JsxDemo} />
              <Route path="/optimize" exact component={OptimizeDemo} />
              <Route path="/prop" exact component={PropTypesDemo} />
            </Switch>
        </Content>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
