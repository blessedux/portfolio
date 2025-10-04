import { notFound } from 'next/navigation';
import { readFileSync } from 'fs';
import { join } from 'path';

export default function CodeologyCatchAll() {
  try {
    // Read the static HTML file
    const filePath = join(process.cwd(), 'public', 'my-work', 'codeology', 'index.html');
    const htmlContent = readFileSync(filePath, 'utf8');
    
    // Return the HTML content
    return (
      <div 
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        style={{ width: '100%', height: '100vh' }}
      />
    );
  } catch (error) {
    console.error('Error reading Codeology HTML:', error);
    notFound();
  }
}

// This ensures the route is treated as dynamic
export const dynamic = 'force-dynamic';
