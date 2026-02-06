# Mission-Specific Logic 🛰️

Guidelines for handling space-tech and networking simulations.

## 📡 Networking Simulation

When building simulators like **AegisLink**:

- **Speed of Light**: Use the constant $c \approx 299,792,458$ m/s for all latency calculations.
- **Durable State**: Use Cloudflare Durable Objects to maintain consistent "orbital state" for nodes.
- **Handovers**: Simulations must account for nodes moving between different coverage zones.

## 🚑 Humanitarian Priority

Projects like **Lifeline Mesh** must:

- Prioritize reliability over feature density.
- Focus on minimizing "time-to-first-ping".
- Support offline-first or limited-bandwidth modes.

## 🔭 Data Integrity

Raw space data (TLEs, sensor feeds) should be handled with care. Standardize data schemas using JSON/YAML protocols where possible.
