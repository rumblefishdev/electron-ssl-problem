const https = require('https')

const certData = {
  cert:
    '-----BEGIN CERTIFICATE-----\n' +
    'MIICDTCCAbQCBgF8CARaMTAKBggqhkjOPQQDAjASMRAwDgYDVQQDEwdaYmF5IENB\n' +
    'MB4XDTEwMTIyODEwMTAxMFoXDTMwMTIyODEwMTAxMFowSTFHMEUGA1UEAxM+d2Zz\n' +
    'aGVta2syazdtaGltbWRzY2szN2F0ZnprczJpZjYybXNkMzNvemJraDZwb3pqZWNl\n' +
    'dnh6YWQub25pb24wWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAAQAdL8dzxlpvvzQ\n' +
    'h6KPM2So+JtHvsmE6UIzLXBalcaL72uSCYEUJQluQ8G3qGpFdGDuGvmEyUBPetZk\n' +
    'lSsr2i/fo4HDMIHAMAkGA1UdEwQCMAAwCwYDVR0PBAQDAgAOMB0GA1UdJQQWMBQG\n' +
    'CCsGAQUFBwMCBggrBgEFBQcDATAvBgkqhkiG9w0BCQwEIgQgFhQ838rnAgVNBxyF\n' +
    'uQKOrZEwHQCKuPUpeLmF8ELFDMMwFwYKKwYBBAGDjBsCAQQJEwdmZmZmZmZmMD0G\n' +
    'CSsGAQIBDwMBAQQwEy5RbVlxaFFKMmZhMlFvaWZUS05ETm96cWt0ZHZvdGFydFc4\n' +
    'SjY4RjZiUkhESkpuMAoGCCqGSM49BAMCA0cAMEQCIDlCeBPx9h1CLsynqFUHGqSz\n' +
    '0AhBhVGwSS8ArlJSL+NaAiB3HRVpNGrqY6k7A4AGEJafbQeKqX5Bebyf289ptEMs\n' +
    'aw==\n' +
    '-----END CERTIFICATE-----\n',
  key:
    '-----BEGIN PRIVATE KEY-----\n' +
    'MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgKUBkTsiHVd8QsGzE\n' +
    'BuSTj15FJyLHTJfuUQD3uME6A86gCgYIKoZIzj0DAQehRANCAAQAdL8dzxlpvvzQ\n' +
    'h6KPM2So+JtHvsmE6UIzLXBalcaL72uSCYEUJQluQ8G3qGpFdGDuGvmEyUBPetZk\n' +
    'lSsr2i/f\n' +
    '-----END PRIVATE KEY-----\n',
  ca: [
    '-----BEGIN CERTIFICATE-----\n' +
    'MIIBTDCB8wIBATAKBggqhkjOPQQDAjASMRAwDgYDVQQDEwdaYmF5IENBMB4XDTEw\n' +
    'MTIyODEwMTAxMFoXDTMwMTIyODEwMTAxMFowEjEQMA4GA1UEAxMHWmJheSBDQTBZ\n' +
    'MBMGByqGSM49AgEGCCqGSM49AwEHA0IABJopyFuRRKKWSQprJJ5cwKfOclNqWkbQ\n' +
    'yGX7+gxMP/vlpD22WviWR7wkjPHZIA+0ip5TtOfbjzPeEyvBnYapAnKjPzA9MA8G\n' +
    'A1UdEwQIMAYBAf8CAQMwCwYDVR0PBAQDAgAGMB0GA1UdJQQWMBQGCCsGAQUFBwMC\n' +
    'BggrBgEFBQcDATAKBggqhkjOPQQDAgNIADBFAiAFpZd4314bwRRmsniUzhEUhWj9\n' +
    'UhjoGl+0GeMZWl1C7AIhAK+E8gHbwUHteyabv3cqn7EL089iNDyFcOMdAuZBcuRb\n' +
    '-----END CERTIFICATE-----\n'
  ]
}
const serverHttps = https.createServer({
  cert: certData.cert,
  key: certData.key,
  ca: certData.ca,
  requestCert: true,
  enableTrace: true
})
console.log('It works!')
