export async function main(
  submissions: Map<string, number>,
  MAX_ACCEPTED_AGE: number
): Promise<void> {
  setInterval(() => {
    const outdatedTimestamp = Date.now() - MAX_ACCEPTED_AGE
    submissions.forEach((timestamp, hash) => {
      if (timestamp < outdatedTimestamp) submissions.delete(hash)
    })
  }, 1000)
}
