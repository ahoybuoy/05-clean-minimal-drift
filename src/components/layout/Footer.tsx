import { Container } from './Container'
import { Stack } from './Stack'
import { Separator } from '../ui/Separator'

export function Footer() {
  return (
    <footer className="bg-gray-50">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Company</h3>
              <Stack gap="sm" className="mt-4">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">About</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Careers</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Press</a>
              </Stack>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Product</h3>
              <Stack gap="sm" className="mt-4">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Features</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Pricing</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Integrations</a>
              </Stack>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Resources</h3>
              <Stack gap="sm" className="mt-4">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Documentation</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Guides</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</a>
              </Stack>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Legal</h3>
              <Stack gap="sm" className="mt-4">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Security</a>
              </Stack>
            </div>
          </div>
          <Separator className="my-8" />
          <p className="text-center text-sm text-gray-500">
            © 2024 Clean Minimal Drift. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
