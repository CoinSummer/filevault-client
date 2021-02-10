import fs from "fs"
import { createPow, powTypes } from "@textile/powergate-client"

const host = "http://0.0.0.0:6002" // or whatever powergate instance you want

const pow = createPow({ host })

async function exampleCode() {
  // get wallet addresses associated with the user
  const { addressesList } = await pow.wallet.addresses()

  // create a new address associated with the user
  const { address } = await pow.wallet.newAddress("my new address")

  // get build information about the powergate server
  const res = await pow.buildInfo()

  // cache data in IPFS in preparation to store it
  const buffer = fs.readFileSync(`path/to/a/file`)
  const { cid } = await pow.data.stage(buffer)

  // store the data using the default storage configuration
  const { jobId } = await pow.storageConfig.apply(cid)

  // watch the job status to see the storage process progressing
  const jobsCancel = pow.storageJobs.watch((job) => {
    if (job.status === powTypes.JobStatus.JOB_STATUS_CANCELED) {
      console.log("job canceled")
    } else if (job.status === powTypes.JobStatus.JOB_STATUS_FAILED) {
      console.log("job failed")
    } else if (job.status === powTypes.JobStatus.JOB_STATUS_SUCCESS) {
      console.log("job success!")
    }
  }, jobId)

  // watch all log events for a cid
  const logsCancel = pow.data.watchLogs((logEvent) => {
    console.log(`received event for cid ${logEvent.cid}`)
  }, cid)

  // get information about the latest applied storage configuration,
  // current storage state, and all related Powegate storage jobs
  const { cidInfo } = await pow.data.cidInfo(cid)

  // retrieve data stored in the user by cid
  const bytes = await pow.data.get(cid)

  // send FIL from an address managed by the user to any other address
  await pow.wallet.sendFil(addressesList[0].address, "<some other address>", BigInt(1000))
}