
type TableProps = {
    data: {
        row: Record<string, any>[],
        col: string[]
    }
}
export default function Table({ data }: TableProps) {
    return (
        <>
            <div className="w-full h-full overflow-auto rounded-lg border border-gray-800">
                <table className="w-full text-left">
                    <thead className=" sticky top-0 bg-[#0f172a] z-10 border-b border-gray-700">
                        <tr>{
                            data.col.map((item, index) => (
                                <th key={index} className="px-4 py-3 text-xs font-medium text-gray-400 capitalize">{item}</th>
                            ))
                        }
                        </tr>
                    </thead>
                    <tbody>
                        {data.row.length ?
                            data.row.map(
                                (rowItem, rowIndex) => (
                                    <tr key={rowIndex} className="h-12 odd:bg-[#020617] even:bg-[#0b1220] hover:bg-[#1a2335] transition">
                                        {
                                            data.col.map((colItem, colIndex) => (
                                                <td key={colIndex} className="px-4 py-2 text-sm text-white">{rowItem[colItem]}</td>
                                            ))
                                        }
                                    </tr>
                                )
                            ) : <tr>
                                <td colSpan={data.col.length}> <div className="flex items-center justify-center text-gray-400 h-[450px]">
                                    <p className="text-lg">
                                        No Data Found
                                    </p>
                                </div>
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}