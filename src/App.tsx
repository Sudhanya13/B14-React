// import { Suspense, useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import Nav from "./components/Nav";
// import Banner from "./components/Banner";
// import Techcards from "./components/Techcards";
// import YourStack from "./components/YourStack";
// import Footer from "./components/Footer";

// import type { Technology } from "./types/Cardtype";

// function App() {
//   // Selected technologies
//   const [selectedTech, setSelectedTech] = useState<Technology[]>([]);

//   // Fetch technology data
//   const [technologyPromise] = useState(() =>
//     fetch("/data.json").then((res) => res.json()),
//   );

//   // ADD
//   const handleAdd = (technology: Technology) => {
//     const alreadyAdded = selectedTech.some((tech) => tech.id === technology.id);

//     if (alreadyAdded) {
//       toast.warning(`${technology.name} is already in your stack!`);
//       return;
//     }

//     setSelectedTech([...selectedTech, technology]);

//     toast.success(`${technology.name} added to your stack!`);
//   };

//   // REMOVE ONE
//   const handleRemove = (id: string) => {
//     const removedTechnology = selectedTech.find((tech) => tech.id === id);

//     setSelectedTech(selectedTech.filter((technology) => technology.id !== id));

//     toast.info(`${removedTechnology?.name} removed from your stack.`);
//   };

//   // REMOVE ALL
//   const handleRemoveAll = () => {
//     setSelectedTech([]);

//     toast.info("All technologies removed!");
//   };

//   return (
//     <>
//       <Nav />

//       <Banner />

//       <main className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Technology section */}
//           <section className="lg:col-span-3">
//             <h2 className="text-2xl font-bold mb-6">Explore Technologies</h2>

//             <Suspense
//               fallback={
//                 <div className="text-center py-10">
//                   <span className="loading loading-spinner loading-lg"></span>

//                   <p className="mt-3">Loading technologies...</p>
//                 </div>
//               }
//             >
//               <Techcards
//                 cardData={technologyPromise}
//                 selectedTech={selectedTech}
//                 onAdd={handleAdd}
//               />
//             </Suspense>
//           </section>
//           {/* Sidebar */}
//           <section>
//             <YourStack
//               selectedTech={selectedTech}
//               onRemove={handleRemove}
//               onRemoveAll={handleRemoveAll}
//             />
//           </section>
//         </div>
//       </main>

//       <Footer />

//       {/* Toast */}
//       <ToastContainer position="top-right" />
//     </>
//   );
// }

// export default App;
import { Suspense, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Techcards from "./components/Techcards";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

import type { Technology } from "./types/Cardtype";

function App() {
  const [selectedTech, setSelectedTech] = useState<Technology[]>([]);

  // Fetch technology data
  const [technologyPromise] = useState(() =>
    fetch("/data.json").then((res) => res.json()),
  );

  // Add technology
  const handleAdd = (technology: Technology) => {
    const alreadyAdded = selectedTech.some((tech) => tech.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedTech([...selectedTech, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove one technology
  const handleRemove = (id: string) => {
    const removedTechnology = selectedTech.find((tech) => tech.id === id);

    setSelectedTech(selectedTech.filter((technology) => technology.id !== id));

    toast.info(`${removedTechnology?.name} removed from your stack.`);
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setSelectedTech([]);

    toast.info("All technologies removed!");
  };

  return (
    <>
      <Nav />

      <Banner />

      <main className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#334155]">
            Explore
            <span className="font-bold text-3xl bg-gradient-to-r from-pink-500 from-0% to-[#8B5CF6] to-8% bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>

          <p className="mt-3 text-[#475569]">
            Pick one technology per category to build your stack
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Technology Section */}
          <section className="lg:col-span-3">
            <Suspense
              fallback={
                <div className="text-center py-10">
                  <span className="loading loading-spinner loading-lg"></span>

                  <p className="mt-3">Loading technologies...</p>
                </div>
              }
            >
              <Techcards
                cardData={technologyPromise}
                selectedTech={selectedTech}
                onAdd={handleAdd}
              />
            </Suspense>
          </section>

          {/* Your Stack */}
          <section>
            <YourStack
              selectedTech={selectedTech}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </section>
        </div>
      </main>

      <Footer />

      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
