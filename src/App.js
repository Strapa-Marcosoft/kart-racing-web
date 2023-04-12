import './App.css';
import AdmHome from "./components/adm/AdmHome";
import { Route, Routes, useNavigate } from 'react-router-dom';
import ListLocation from "./components/adm/ListLocation";
import FormLocation from "./components/adm/FormLocation";
import ListPilot from "./components/adm/ListPilot";
import FormPilot from "./components/adm/FormPilot";
import ListSeason from "./components/adm/ListSeasson";
import FormSeason from "./components/adm/FormSeason"
import ListRound from "./components/adm/ListRound";
import FormRound from "./components/adm/FormRound";
import FormRoundDetail from "./components/adm/FormRoundDetail";
import Season from "./components/public/Season";
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';

const oktaAuth = new OktaAuth({
  issuer: 'https://{dev-83bd3pty2meq0ti7.us.auth0.com}/oauth2/default',
  clientId: '3UMePSX8xjHkoI2KtbbYjPcHosNDdApQ',
  redirectUri: window.location.origin + '/login/callback'
});

function App() {
  const history = useNavigate();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <div>
      <main>
        <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
          {/* <Route path='/' exact={true} component={Home} /> */}
          <SecureRoute path='/protected' component={AdmHome} />
          <Route path='/login/callback' component={LoginCallback} />
        </Security>
        <Routes>
          <Route path="/admin/" element={<AdmHome />} exact />
          <Route path="/admin/location" element={<ListLocation />} exact />
          <Route path="/admin/location/new" element={<FormLocation />} exact />
          <Route path="/admin/pilot" element={<ListPilot />} exact />
          <Route path="/admin/pilot/new" element={<FormPilot />} exact />
          <Route path="/admin/season" element={<ListSeason />} exact />
          <Route path="/admin/season/new" element={<FormSeason />} exact />
          <Route path="/admin/round" element={<ListRound />} exact />
          <Route path="/admin/round/new" element={<FormRound />} exact />
          <Route path="/admin/round/:id" element={<FormRoundDetail />} exact />

          <Route path="/season/:seasonId" element={<Season />} exact />
        </Routes>
      </main>
    </div>
  );
}

export default App;
