import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <nav className={'bg-black'}>
          <ul className={'py-4 -mt-1'}>
              <li className={'text-white inline px-4 py-4 font-semibold'}>About</li>
              <li className={'text-white inline px-4 py-4 bg-blue-600 font-semibold'}>
                  Todos
              </li>
              <li className={'text-white inline px-4 py-4 font-semibold'}>Contact</li>
          </ul>
      </nav>

      <div className={'flex justify-center mt-32 p-12'}>
          <input type="text" className={'border border-gray-300 rounded p-2 mr-20 w-1/3'} placeholder={'Task...'}/>

          <button className={'border-2 py-3 px-8 border-blue-500 w-1/6 rounded text-blue-500 font-bold'}>Add</button>

      </div>

      <div className={'flex justify-center'}>
          <div className={'w-1/2 h-1/4 bg-gray-50 p-2'}>
              {/*lasjd*/}
              {/**/}
              <ul className={'pb-6'}>
                  <li className={'p-2 pb-3 border-b border-gray-200'}>
                      <input type="checkbox" className={'mr-2 h-5 w-5 align-text-top'}/>
                      <span className={'font-semibold'}>Go to grocery</span>
                      <i className={'fa fa-trash text-red-400 float-right mr-2 mt-1'}></i>
                  </li>
                  <li className={'p-2 pb-3 border-b border-gray-200'}>
                      <input type="checkbox" className={'mr-2 h-5 w-5 align-text-top'}/>
                      <span className={'font-semibold'}>Work on project</span>
                      <i className={'fa fa-trash text-red-400 float-right mr-2 mt-1'}></i>
                  </li>
                  <li className={'p-2 pb-3 border-b border-gray-200'}>
                      <input type="checkbox" className={'mr-2 h-5 w-5 align-text-top'}/>
                      <span className={'font-semibold'}>Study programming</span>
                      <i className={'fa fa-trash text-red-400 float-right mr-2 mt-1'}></i>
                  </li>
              </ul>

          </div>
      </div>

      <div className={'flex justify-center pt-12'}>
          {/*<h6 className={'font-bold'}>Show:</h6>*/}
          <button className={'bg-blue-500 w-20 rounded text-white py-3 px-4 font-bold'}>All</button>
          &nbsp;&nbsp;&nbsp;
          <button className={'bg-gray-300 w-20 rounded text-gray-600 py-3 px-4 font-bold'}>Active</button>
          &nbsp;&nbsp;&nbsp;
          <button className={'bg-gray-300 w-32 rounded text-gray-600 py-3 px-4 font-bold'}>Completed</button>
          {/*<button className={'border-2 py-3 px-8 border-blue-500 w-1/6 rounded text-blue-500 font-bold'}>Add</button>*/}
          {/*<button className={'border-2 py-3 px-8 border-blue-500 w-1/6 rounded text-blue-500 font-bold'}>Add</button>*/}
      </div>


    </>
  );
}

export default App;



// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
