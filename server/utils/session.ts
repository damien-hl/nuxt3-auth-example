export function serialize(obj: any) {
    return Buffer.from(JSON.stringify(obj), 'utf-8').toString('base64'); 
}

export function deserialize(value: string) {
    return JSON.parse(Buffer.from(value, 'base64').toString('utf-8')); 
}