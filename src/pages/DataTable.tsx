// components/DataTable.tsx
import { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Caption,
  Button,
  HStack,
} from '@chakra-ui/react';

interface DataTableProps {
  headers: string[];
  caption?: string;
  sortable?: boolean;
  pagination?: boolean;
  rows: any[]; // Replace any with your actual row type
}

const DataTable: React.FC<DataTableProps> = ({ headers, caption, sortable, pagination, rows }) => {
  const [sortedColumn, setSortedColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const handleColumnSort = (column: string) => {
    if (column === sortedColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortedColumn(column);
      setSortDirection('asc');
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Calculate the index of the first and last item for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Sort the rows based on the sorted column and direction
  const sortedRows = [...rows];
  if (sortedColumn) {
    sortedRows.sort((a, b) => {
      const aValue = a[sortedColumn];
      const bValue = b[sortedColumn];

      if (sortDirection === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });
  }

  // Get the items for the current page
  const currentItems = sortedRows.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      {caption && <Caption>{caption}</Caption>}
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            {headers.map((header, index) => (
              <Th key={index} onClick={() => sortable && handleColumnSort(header)}>
                {header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {currentItems.map((row, index) => (
            <Tr key={index}>
              {Object.entries(row).map(([key, value]) => (
                <Td key={key}>
                  {key === 'Status' ? (
                    <Box
                      w="80px"
                      h="50px"
                      borderRadius="40%"
                      bg={
                        value === 'paid'
                          ? 'green.500'
                          : value === 'Waiting'
                          ? 'yellow.500'
                          : value === 'failed'
                          ? 'red.500'
                          : 'yellow.500'
                      }
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      color="white"
                    >
                      {value}
                    </Box>
                  ) : key === 'Select' ? (
                    <Button variant="outline">Select</Button>
                  ) : (
                    value
                  )}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Add the condition to show pagination section */}
      {pagination && (
        <HStack mt={4} spacing={4} justifyContent="center">
          <Button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            variant="outline"
          >
            Previous
          </Button>
          <Button
            onClick={handleNextPage}
            disabled={indexOfLastItem >= rows.length}
            variant="outline"
          >
            Next
          </Button>
        </HStack>
      )}
    </div>
  );
};

export default DataTable;
