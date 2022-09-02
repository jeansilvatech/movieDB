import React, { FormEvent, useEffect, useState} from "react";
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { args } from '../config/api';
import Home from './index';

const Details = ()=>{
    const [data, setData] = useState<any[]>([])
    return(
        <div className={styles.details}>
          <h1>Funcionalidade sendo criada</h1>
        </div>
    )
}
export default Details