import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/Home.module.css";
import { Typography } from "@mui/material";
import { AppbarHeader } from "@/styles/appbar";
import Link from "next/link";
import CoustemrDashbord from "@/components/CoustemerDashbord/CoustemrDashbord";
import Catagory from "@/components/Catagory/CNva";
import CPhot from "@/components/Catagory/CPhot";
import Festival from "@/components/Catagory/Festival";

import Page from "@/components/Page/Page";
import CNav from '../components/Catagory/CNva'
import LoginForm from "@/components/Page/LoginForm";
import Signup from "@/components/SignUP/Signup";
import Login from "@/components/Login/Login";
import ForgetPassword from "@/components/Login/ForgetPass/ForgetPassword";
import Verification from "@/components/Login/Verification";
import Subscription from "@/components/Subscription/Subscription";
import EventHead from "@/components/EventDiscription/EventHead";
import Ediscription from "@/components/EventDiscription/Ediscription";
import Event1 from "@/components/EventSetting/Event1";
import NavEvent from "@/components/EventSetting/NavEvent";
import Layout from "@/components/Layout";
import Bannar from "@/components/Bannar";
import Promotion from "@/components/Promotion";
import Sellticket from "@/components/Sellticket";
import Explore from "@/components/Explore";
import Paidinstantly from "@/components/Paidinstantly";



export default function Home() {
  return (

    <>
    <Layout title='Home page'>
      <Bannar/>
      <Promotion />
      <Sellticket />
      <Explore />
      <Paidinstantly />
    </Layout>
    </>
  );
}
