# Dione

Dione is an HTTP-based task queuing system designed for environments with limited infrastructure. Developed in TypeScript, Node.js & NestJS, Dione is ideal for situations where a simple yet effective queuing solution is needed without the complexity or additional infrastructure overhead.

## Description

Dione provides a efficient solution for managing task queues. It is particularly suited for environments where resources are limited, and simplicity and resource efficiency are crucial.

The system allows you to enqueue tasks via HTTP requests, processing them asynchronously in a separate thread or scheduled task. Each task can include JSON data (objects or arrays) that are sent to a specified endpoint. This approach facilitates easy integration with existing systems and enables distributed task execution without overloading the main server.

## Features

- Data Validation: Ensure that task data is valid and properly formatted before processing.
- Asynchronous Processing: Uses scheduled tasks to isolate task processing, keeping the main server agile and responsive.
- Persistence: Stores tasks and their statuses in a SQLite database (by default), maintaining a history and enabling task monitoring.
- Simple Integration: Enables communication with other systems through HTTP endpoints, making backend process implementation and integration more straightforward.

# LICENSE

MIT License - see [LICENSE](LICENSE)
