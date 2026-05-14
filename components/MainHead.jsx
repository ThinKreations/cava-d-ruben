import Head from "next/head";

export default function MainHead(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta charSet="utf-8" />
        </Head>
    )
}