async function main () {
    const res = await fetch("")
    const json = await res.json
    console.log(json)
}