// pages/index.tsx
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import DataTable from './DataTable';




const headers = ['Timestamp', 'Purchase Id', 'Mail', 'Name', 'Source', 'Status', 'Select'];

const rows = [

{
    "Timestamp": "2023-01-01 10:00:00",
    "Purchase Id": 1,
    "Mail": "john@mail.com",
    "Name": "John Doe",
    "Source": "",
    "Status": "failed",
    "Select": "Yes"
  },
  {
    "Timestamp": "2023-01-02 11:30:00",
    "Purchase Id": 2,
    "Mail": "jane@mail.com",
    "Name": "Jane Smith",
    "Source": "",
    "Status": "waiting",
     "Select": "Yes"
  },
  {
    "Timestamp": "2023-01-03 15:45:00",
    "Purchase Id": 3,
    "Mail": "mike@mail.com",
    "Name": "Mike Johnson",
    "Source": "",
    "Status": "paid",
     "Select": "Yes"
  },
  {
    "Timestamp": "2023-01-04 09:15:00",
    "Purchase Id": 4,
    "Mail": "emily@mail.com",
    "Name": "Emily Brown",
    "Source": "",
    "Status": "waiting",
     "Select": "Yes"
  },
  {
    "Timestamp": "2023-01-05 14:20:00",
    "Purchase Id": 5,
    "Mail": "david@mail.com",
    "Name": "David Wilson",
    "Source": "",
    "Status": "failed",
     "Select": "Yes"
  },
  {
    "Timestamp": "2023-01-06 12:10:00",
    "Purchase Id": 6,
    "Mail": "sophia@mail.com",
    "Name": "Sophia Davis",
    "Source": "",
    "Status": "paid",
     "Select": "Yes"
  },
  {
    "Timestamp": "2023-01-07 16:30:00",
    "Purchase Id": 7,
    "Mail": "daniel@mail.com",
    "Name": "Daniel Martinez",
    "Source": "",
    "Status": "failed",
     "Select": "Yes"
  },
  {
    "Timestamp": "2023-01-08 08:45:00",
    "Purchase Id": 8,
    "Mail": "olivia@mail.com",
    "Name": "Olivia Taylor",
    "Source": "",
    "Status": "waiting",
     "Select": "Yes"
  },
  {
    "Timestamp": "2023-01-09 13:25:00",
    "Purchase Id": 9,
    "Mail": "ethan@mail.com",
    "Name": "Ethan Anderson",
    "Source": "",
    "Status": "paid",
     "Select": "Yes"
  },
  {
    "Timestamp": "2023-01-10 09:55:00",
    "Purchase Id": 10,
    "Mail": "ava@mail.com",
    "Name": "Ava Thomas",
    "Source": "",
    "Status": "waiting",
     "Select": "Yes"
  },
  {
    "Timestamp": "2023-01-11 14:40:00",
    "Purchase Id": 11,
    "Mail": "noah@mail.com",
    "Name": "Noah Lee",
    "Source": "",
    "Status": "paid",
     "Select": "Yes"
  },
  {
    "Timestamp": "2023-01-12 10:20:00",
    "Purchase Id": 12,
    "Mail": "isabella@mail.com",
    "Name": "Isabella Martinez",
    "Source": "",
    "Status": "failed",
     "Select": "Yes"
  },
  {
    "Timestamp": "2023-01-13 15:50:00",
    "Purchase Id": 13,
    "Mail": "mason@mail.com",
    "Name": "Mason White",
    "Source": "",
    "Status": "waiting",
     "Select": "Yes"
  },
  {
    "Timestamp": "2023-01-14 12:05:00",
    "Purchase Id": 14,
    "Mail": "sofia@mail.com",
    "Name": "Sofia Anderson",
    "Source": "",
    "Status": "paid",
    "Select": "Yes"

  },
  {
    "Timestamp": "2023-01-15 17:15:00",
    "Purchase Id": 15,
    "Mail": "liam@mail.com",
    "Name": "Liam Wilson",
    "Source": "",
    "Status": "waiting",
    "Select": "Yes"
  },
  {
    "Timestamp": "2023-01-16 09:40:00",
    "Purchase Id": 16,
    "Mail": "charlotte@mail.com",
    "Name": "Charlotte Davis",
    "Source": "",
    "Status": "paid",
    "Select": "Yes"
  },
  {
    "Timestamp": "2023-01-17 14:25:00",
    "Purchase Id": 17,
    "Mail": "elijah@mail.com",
    "Name": "Elijah Thompson",
    "Source": "",
    "Status": "failed",
    "Select": "Yes"
  },
  {
    "Timestamp": "2023-01-18 11:10:00",
    "Purchase Id": 18,
    "Mail": "avery@mail.com",
    "Name": "Avery Wilson",
    "Source": "",
    "Status": "paid",
    "Select": "Yes"
  },
  {
    "Timestamp": "2023-01-19 15:35:00",
    "Purchase Id": 19,
    "Mail": "logan@mail.com",
    "Name": "Logan Martinez",
    "Source": "",
    "Status": "waiting",
    "Select": "Yes"
  },
  {
    "Timestamp": "2023-01-20 10:50:00",
    "Purchase Id": 20,
    "Mail": "harper@mail.com",
    "Name": "Harper Johnson",
    "Source": "",
    "Status": "failed",
    "Select": "Yes"
  },
  {
    "Timestamp": "2023-01-21 16:05:00",
    "Purchase Id": 21,
    "Mail": "lucas@mail.com",
    "Name": "Lucas Smith",
    "Source": "",
    "Status": "paid",
    "Select": "Yes"
    
  },
  {
    "Timestamp": "2023-01-22 13:30:00",
    "Purchase Id": 22,
    "Mail": "amelia@mail.com",
    "Name": "Amelia Brown",
    "Source": "",
    "Status": "failed",
    "Select": "Yes"
  },
  {
    "Timestamp": "2023-01-23 09:55:00",
    "Purchase Id": 23,
    "Mail": "carter23@mail.com",
    "Name": "Carter Taylor",
    "Source": "",
    "Status": "waiting",
    "Select": "Yes"
  },
  {
    "Timestamp": "2023-01-24 14:15:00",
    "Purchase Id": 24,
    "Mail": "abigai@mail.com",
    "Name": "Abigail Davis",
    "Source": "",
    "Status": "paid",
    "Select": "Yes"
  },


]


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
       
          <DataTable headers={headers}  sortable pagination rows={rows} />
        </div>
      </main>
    </>
  );
}
