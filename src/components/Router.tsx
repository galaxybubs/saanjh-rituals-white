import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';

// Import route components and loaders from Wix Stores
import { rootRouteLoader, WixServicesProvider } from '@/wix-verticals/react-pages/react-router/routes/root';
import {
  ProductDetailsRoute,
  productRouteLoader,
} from '@/wix-verticals/react-pages/react-router/routes/product-details';
import {
  StoreCollectionRoute,
  storeCollectionRouteLoader,
} from '@/wix-verticals/react-pages/react-router/routes/store-collection';
import { defaultStoreCollectionRouteRedirectLoader } from '@/wix-verticals/react-pages/react-router/routes/store-redirect';
import { Cart } from '@/wix-verticals/react-pages/react-router/routes/cart';

// Import pages
import HomePage from '@/components/pages/HomePage';
import AboutPage from '@/components/pages/AboutPage';
import JournalPage from '@/components/pages/JournalPage';
import JournalArticlePage from '@/components/pages/JournalArticlePage';
import ContactPage from '@/components/pages/ContactPage';

// Import layout components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Main Layout component with Header and Footer
function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Root Layout with WixServicesProvider and ScrollToTop
function RootLayout() {
  return (
    <WixServicesProvider>
      <ScrollToTop />
      <MainLayout />
    </WixServicesProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: rootRouteLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "journal",
        element: <JournalPage />,
      },
      {
        path: "journal/:id",
        element: <JournalArticlePage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "products/:slug",
        element: (
          <div className="max-w-[100rem] mx-auto px-4 py-8">
            <ProductDetailsRoute />
          </div>
        ),
        loader: productRouteLoader,
      },
      {
        path: "store",
        element: <></>,
        loader: defaultStoreCollectionRouteRedirectLoader,
        index: true,
      },
      {
        path: "store/:categorySlug",
        element: (
          <div className="max-w-[100rem] mx-auto px-4 py-8">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-8">
              Shop Ritual Blends
            </h1>
            <StoreCollectionRoute productPageRoute="/products" />
          </div>
        ),
        loader: storeCollectionRouteLoader,
      },
      {
        path: "cart",
        element: (
          <div className="max-w-[100rem] mx-auto px-4 py-8">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-8">
              Your Cart
            </h1>
            <Cart />
          </div>
        ),
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
