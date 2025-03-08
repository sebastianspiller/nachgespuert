import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-3xl font-bold mb-6 text-gray-900">{children}</h1>
  ),
  h2: (props: { children: React.ReactNode }) => (
    <h2 {...props} className="text-2xl font-semibold mb-4 text-gray-800">
      {props.children}
    </h2>
  ),
  h3: (props: { children: React.ReactNode }) => (
    <h3 {...props} className="text-l font-semibold mb-4 text-gray-800">
      {props.children}
    </h3>
  ),
  ol: (props: { children: React.ReactNode }) => (
    <ol {...props} className="list-decimal pl-6 mb-4 space-y-2">
      {props.children}
    </ol>
  ),
  ul: (props: { children: React.ReactNode }) => (
    <ul {...props} className="list-disc pl-6 mb-4 space-y-2">
      {props.children}
    </ul>
  ),
  li: (props: { children: React.ReactNode }) => (
    <li {...props} className="text-gray-700">
      {props.children}
    </li>
  ),
  table: (props: { children: React.ReactNode }) => (
    <table
      {...props}
      className="min-w-full my-4 border-collapse bg-white rounded-lg overflow-hidden"
    >
      {props.children}
    </table>
  ),
  tr: (props: { children: React.ReactNode }) => (
    <tr {...props} className="border-b border-gray-200">
      {props.children}
    </tr>
  ),
  td: (props: { children: React.ReactNode }) => (
    <td {...props} className="px-4 py-2 text-gray-700">
      {props.children}
    </td>
  ),
  th: (props: { children: React.ReactNode }) => (
    <th {...props} className="px-4 py-2 font-semibold text-gray-900">
      {props.children}
    </th>
  ),
  p: (props: { children: React.ReactNode }) => (
    <p {...props} className="mb-4 text-gray-700">
      {props.children}
    </p>
  ),
  a: (props: { children: React.ReactNode }) => (
    <a {...props} className="text-blue-500 hover:underline">
      {props.children}
    </a>
  ),
};

export function CustomMDX(props: {
  source: string;
  components?: Record<
    string,
    React.ComponentType<React.PropsWithChildren<object>>
  >;
}) {
  return (
    <MDXRemote
      source={props.source}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
