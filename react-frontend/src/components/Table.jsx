const Table = () => {
    return(
  <table class="table-auto w-full border-collapse border border-gray-300 w-full">
    <thead>
      <tr class="bg-gray-100">
        <th class="border border-gray-300 px-4 py-2 text-left">ID</th>
        <th class="border border-gray-300 px-4 py-2 text-left">Source IP</th>
        <th class="border border-gray-300 px-4 py-2 text-left">Destination IP</th>
        <th class="border border-gray-300 px-4 py-2 text-left">Protocol</th>
        <th class="border border-gray-300 px-4 py-2 text-left">Timestamp</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2">1</td>
        <td class="border border-gray-300 px-4 py-2">10.34.211.45</td>
        <td class="border border-gray-300 px-4 py-2">101.54.21.45</td>
        <td class="border border-gray-300 px-4 py-2">ARP</td>
        <td class="border border-gray-300 px-4 py-2">2024-12-10 12:34:56.456</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2">2</td>
        <td class="border border-gray-300 px-4 py-2">38.111.73.14</td>
        <td class="border border-gray-300 px-4 py-2">11.74.43.12</td>
        <td class="border border-gray-300 px-4 py-2">TCP</td>
        <td class="border border-gray-300 px-4 py-2">2024-12-10 12:34:56.856</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2">3</td>
        <td class="border border-gray-300 px-4 py-2">11.74.43.12</td>
        <td class="border border-gray-300 px-4 py-2">10.34.211.45</td>
        <td class="border border-gray-300 px-4 py-2">TCP</td>
        <td class="border border-gray-300 px-4 py-2">2024-12-10 12:34:58.456</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2">4</td>
        <td class="border border-gray-300 px-4 py-2">11.74.43.12</td>
        <td class="border border-gray-300 px-4 py-2">11.74.43.12</td>
        <td class="border border-gray-300 px-4 py-2">TCP</td>
        <td class="border border-gray-300 px-4 py-2">2024-12-10 12:34:58.456</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2">5</td>
        <td class="border border-gray-300 px-4 py-2">11.74.43.12</td>
        <td class="border border-gray-300 px-4 py-2">11.74.43.12</td>
        <td class="border border-gray-300 px-4 py-2">IP</td>
        <td class="border border-gray-300 px-4 py-2">2024-12-10 12:34:58.456</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2">6</td>
        <td class="border border-gray-300 px-4 py-2">11.74.43.12</td>
        <td class="border border-gray-300 px-4 py-2">11.74.43.12</td>
        <td class="border border-gray-300 px-4 py-2">IP</td>
        <td class="border border-gray-300 px-4 py-2">2024-12-10 12:34:58.456</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2">7</td>
        <td class="border border-gray-300 px-4 py-2">11.74.43.12</td>
        <td class="border border-gray-300 px-4 py-2">11.74.43.12</td>
        <td class="border border-gray-300 px-4 py-2">IP</td>
        <td class="border border-gray-300 px-4 py-2">2024-12-10 12:34:58.456</td>
      </tr>
    </tbody>
  </table>

    )
}

export default Table
