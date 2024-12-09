/**
 * @swagger
 * /graphql:
 *   post:
 *     summary: Using architecture Style called GraphQL
 *     description: Use GraphQL queries to interact with the API.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               query:
 *                 type: string
 *                 example: "{ meybili }"
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
