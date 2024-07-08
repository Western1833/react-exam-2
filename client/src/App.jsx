import Footer from "./components/shared/footer/Footer.jsx"
import Navigation from "./components/shared/navigation/Navigation.jsx"
import Wrapper from "./components/shared/wrapper/Wrapper.jsx";
import { AuthProvider } from "./contexts/authContext.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

function App() {

  return (
    <ErrorBoundary>
      <AuthProvider>
        <Navigation/>
          <Wrapper/>
        <Footer/>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
