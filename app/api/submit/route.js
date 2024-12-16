import Next from "next";
import database from "@/backendconfig";
import { NextResponse } from "next/server";
export const GET = async req => {
    return NextResponse.json({ message: "GET REQUEST ON THE FORM ROUTE" }, { status: 200 });
}
export const POST = async req => {
    let parsedbody = await req.json();
    database().then(connectivity => {
        connectivity.query(`insert into form_records(name,email,message) values(?,?,?)`, [parsedbody.name, parsedbody.email, parsedbody.message]).then(response => response);
    })
    return NextResponse.json({ message: "Thanks for contacting us" }, { status: 201 });
}
