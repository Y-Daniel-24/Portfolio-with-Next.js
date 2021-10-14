import React from 'react'
import Layout from '../components/Layout'
import Error from './_error'
const Github = ({user,statusCode}) => {
    const {name,avatar_url,html_url,bio}=user

    if(statusCode){
        return <Error/>
    }

    return (
        <Layout>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h3>{name}</h3>
                        <img src={avatar_url} alt={name} />
                        <p className="fst-italic text-breack">{bio}</p>
                        <a href={html_url} target="_blank" className="btn btn-outline-secondary">Go to Github</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(){

    const res=await fetch('https://api.github.com/users/Y-Daniel-24');
    const data= await res.json()
    const statusCode= res.status>200 ? res.status:false  
    return{
        props:{
            user:data,
            statusCode
        }
    }
}

export default Github
