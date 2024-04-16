import { useState } from "react"
import MultiplicationTable from "./MultiplicationTable"

function App() {
  const [tableProps, setTableProps] = useState({
    x: '10',
    y: '10',
    textColor: '#000000',
    backgroundColor: '#ffffff',
    fontWeight: '400',
    padding: '8',
    borderWidth: '1'
  })

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold my-6">Tabliczka mnożenia</h1>
      <div className="max-w-80">
        <label className="block mt-3">
          <span className="text-gray-700">Ilość kolumn</span>
          <input
            value={tableProps.x}
            onChange={e => setTableProps({ ...tableProps, x: e.target.value })}
            min="1"
            type="number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </label>
        <label className="block mt-3">
          <span className="text-gray-700">Ilość wierszy</span>
          <input
            value={tableProps.y}
            onChange={e => setTableProps({ ...tableProps, y: e.target.value })}
            min="1"
            type="number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </label>
        <label className="block mt-3">
          <span className="text-gray-700">Kolor tekstu</span>
          <input
            value={tableProps.textColor}
            onChange={e => setTableProps({ ...tableProps, textColor: e.target.value })}
            type="color"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </label>
        <label className="block mt-3">
          <span className="text-gray-700">Kolor tła</span>
          <input
            value={tableProps.backgroundColor}
            onChange={e => setTableProps({ ...tableProps, backgroundColor: e.target.value })}
            type="color"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </label>
        <label className="block">
          <span className="text-gray-700">Grubość czcionki</span>
          <select
            value={tableProps.fontWeight}
            onChange={e => setTableProps({ ...tableProps, fontWeight: e.target.value })}
            className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
            <option value="600">600</option>
            <option value="700">700</option>
            <option value="800">800</option>
            <option value="900">900</option>
          </select>
        </label>
        <label className="block mt-3">
          <span className="text-gray-700">Margines wewnętrzny</span>
          <input
            value={tableProps.padding}
            onChange={e => setTableProps({ ...tableProps, padding: e.target.value })}
            type="number"
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </label>
        <label className="block mt-3">
          <span className="text-gray-700">Grubość obramowania</span>
          <input
            value={tableProps.borderWidth}
            onChange={e => setTableProps({ ...tableProps, borderWidth: e.target.value })}
            type="number"
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </label>
      </div>
      <MultiplicationTable
        className="mt-6"
        {...tableProps} />
    </div>
  )
}

export default App
